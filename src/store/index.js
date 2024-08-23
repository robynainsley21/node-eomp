import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// import { applyToken } from "@/service/AuthenticateUser.js";
// import { useCookies } from "vue3-cookies"; 

// const { cookies } = useCookies();
const apiURL = "https://node-eomp-pav1.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    recentProducts: null,
  },
  getters: {},
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setProduct(state, payload) {
      state.product = payload;
    }
  },
  actions: {
    async fetchUsers({commit}) {
      try {
        let { data, msg } = await axios.get(`${apiURL}users`);
        if (data.result) {
          commit("setUsers", data.result);
          console.log(data);
          
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async fetchUser({commit}, id) {
      try {
        const { data , msg } = await axios.get(`${apiURL}users/${id}`);
        if (data.result) {
          commit("setUser", data.result);
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async updateUser(context, payload) {
      console.log(payload);
      
      try {
        const { msg, err } = await (
          await axios.patch(`${apiURL}users/update/${payload.userID}`, payload)
        ).data;
        if (msg) {
          context.dispatch("fetchUsers");
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async register(context, payload) {
      try {
        const { msg, err, token } = await (
          await axios.post(`${apiURL}users/register`, payload)
        ).data;
        if (token) {
          context.dispatch("fetchUsers");
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          router.push({ name: "login" });
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async deleteUser(context, id) {
      try {
        const { msg, err } = await (
          await axios.delete(`${apiURL}users/delete/${id}`)
        ).data;
        if (msg) {
          context.dispatch("fetchUsers");
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    // async login(context, payload) {
    //   try {
    //     const { msg, result, token } = await (
    //       await axios.post(`${apiURL}user/login`, payload)
    //     ).data;

    //     if (result) {
    //       toast.success(`${msg}😎`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER,
    //       });
    //       context.commit("setUser", {
    //         msg,
    //         result,
    //       });
    //       cookies.set("LegitUser", { token, msg, result });
    //       applyToken(token);
    //       router.push({ name: "products" });
    //     } else {
    //       toast.error(`${msg}`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER,
    //       });
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER,
    //     });
    //   }
    // },
    async fetchProducts({commit}) {
      try {
        let { data, msg } =  await axios.get(`${apiURL}products`) 
            
            if (data.results) {
              commit("setProducts", data.results);
            } else {
              toast.error(`${msg}`, {
                autoClose: 3000,
              });
            }
          } catch (error) {
            toast.error(`${error.message}`, {
              autoClose: 3000,
              position: toast.POSITION.BOTTOM_CENTER,
            });
          }
    },
    async fetchProduct({commit}, id) {

      try {
        let { data, msg } = await axios.get(`${apiURL}products/${id}`)
            if (data.result) {
              commit("setProduct", data.result);
            console.log(data);
            }
            else {
              toast.error(`${msg}`, {
                autoClose: 3000,
                position: toast.POSITION.BOTTOM_CENTER,
              });
            }
          } catch (error) {
            toast.error(`${error.message}`, {
              autoClose: 3000,
              position: toast.POSITION.BOTTOM_CENTER,
            });
          }
    },
    async addProduct(context, payload) {
      try {
        const { msg } = await (
          await axios.post(`${apiURL}products/addProduct`, payload)
        ).data;
        if (msg) {
          context.dispatch("fetchProducts");
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async updateProduct(context, payload) {
      console.log(payload);
      
      try {
        const { msg } = await (
          await axios.patch(`${apiURL}products/update/${payload.prodID}`, payload)
        ).data;
        if (msg) {
          context.dispatch("fetchProducts");
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async deleteProduct(context, id) {
      try {
        const { msg } = await (
          await axios.delete(`${apiURL}products/update/${id}`)
        ).data;
        if (msg) {
          context.dispatch("fetchProducts");
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
  },
  modules: {},
});
