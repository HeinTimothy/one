import Vue from 'vue'
import Web3 from 'web3';
import Tea from '@/../build/contracts/Tea.json';
import  { create } from 'ipfs-http-client';

const baseURI = "https://ipfs.io/ipfs/";

const state = () => ({
  tokens: {},
  account: null,
  //web3 stuff
  client: null,
  liltimmy: "0x26910dc0106a326b6bbd84ad3df554aea0e13524",
  web3: null,
  networkId: null,
  deployedNetwork: null,
  meta: null,
});

const getters = {
  getMe (state) {
    return state.liltimmy;
  },
  getTokens (state) {
    return state.tokens
  },
  getToken: (state) => (id) => {
    return state.tokens[id];
  },
  getAccount (state) {
    return state.account;
  }
}

const mutations = {
  //loading
  loadWeb3 (state, data) {
    state.client = data.client;
    state.web3 = data.web3;
    state.networkId = data.networkId;
    state.deployedNetwork = data.deployedNetwork;
    state.meta = data.meta;
  },
  loadToken (state, token) {
    Vue.set(state.tokens, token.id, token);
  },
  // creating / burning tokens
  burn (state, tokenId) {
    Vue.delete(state.tokens, tokenId);
  },
  //account
  connect (state, account) {
    Vue.set(state, 'account', account);
  }
}

const actions = {
  //Loading tokens

  async loadWeb3 ({ commit, dispatch }) {
    console.log("Loading web3");
    const client = create('https://ipfs.infura.io:5001/api/v0');
    console.log(client);
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Tea.networks[networkId];
    const meta = new web3.eth.Contract(
      Tea.abi,
      deployedNetwork.address,
    );
    commit('loadWeb3', {
      client: client,
      web3: web3,
      networkId: networkId,
      deployedNetwork: deployedNetwork,
      meta: meta,
    });
    dispatch('loadTokens');
  },

  async loadTokens ({ /* commit, */ state }) {
    console.log("Loading tokens");
    if(state.meta != null) {
      console.log(state.meta);
      try {
        //const { tokenURI } = state.meta.methods;
        state.meta.getPastEvents(
          'Brew',
          (events) => {
            console.log(events);
            /*
            for (let i = 0; i < numTokens; i++) {
              const newTokens = tokens;
              const tokenId = await tokenOfOwnerByIndex(address, i).call()
              const URI = await tokenURI(tokenId).call();
              tokens[i] = {tokenId: tokenId, uri: URI}
              console.log(tokens[i]);
              setTokens(newTokens);
            }
            */
          }
        );
        state.meta.events.Brew({}, async (error, event) => {
          console.log(error);
          console.log(event);
          if(error == null) {
            const tokenId = event.returnValues.tokenId;
            const uri = await state.meta.methods.tokenURI(tokenId).call();
            console.log("URI: ");
            console.log(uri);
            const modifiedURI = baseURI + uri.slice(7);
            console.log(modifiedURI);
            const response = await fetch(modifiedURI);
            console.log(response);
            if(response.ok) {
              const tokenData = await response.text()
              console.log("Token data: ");
              console.log(tokenData);
            } else {
              console.log(response.statusText);
            }
          } else {
            console.log(error);
          }
        })
      } catch (error) {
        console.error("Failed to get tokens");
        console.error(error);
      }
    }
  },

  /* Creating and Burning Tokens */
  async brewToken ({ dispatch, state}, metadata) {
    if(state.meta != null) {
      const URI = await dispatch('uploadToken', metadata);
      const { brewTea } = state.meta.methods;
      const result = await brewTea(state.account, URI).send({from: state.account});
      console.log(result);
    }
  },
  async burnToken ({ commit, state }, tokenId) {
    if(state.meta != null) {
      const { burn } = state.meta.methods;
      await burn(state.tokens[tokenId].tokenId).send({from: state.account});
      commit('burn', tokenId);
    }
  },
  //ipfs
  async uploadToken ({ state }, data) {
   //const file = e.target.files[0]
    try {
      const image = await state.client.add(data.image);
      const imageURI = 'https://ipfs.infura.io/ipfs/' + image.path
      const tokenJSON = {
        "name": data.name,
        "description": data.description,
        "external_url": "timmy.one/dark",
        "image": imageURI,
      }
      console.log(state.client);
      const token = await state.client.add(JSON.stringify(tokenJSON));
      console.log("IPFS response for token");
      console.log(token);
      return "ipfs://" + token.path;
    } catch (error) {
      console.log('Error uploading file: ', error)
      return false;
    }
  },

  //accounts
  async connect ({ commit }, account) {
    try {
      //get accounts
      commit('connect', account);
      console.log("Connected");
    } catch (error) {
      console.error("Could not connect to contract or chain");
      console.log(error);
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
