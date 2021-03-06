import { MutationTree, ActionTree, Module, GetterTree } from 'vuex';
import { State as RootState } from '../index';
import {
  namespaced,
  register as commonRegister,
  State as CommonState,
  state as commonState,
  mutations as commonMutations,
  actions as commonActions,
  webActions,
  ipcActions,
  getters as commonGetters,
} from '@/stores/modules/translation';
import { languages } from '@/stores/getters';
import { moduleHelper } from '@/stores';

export const register: configPairs<State> = {
  ...commonRegister,
};

const state: State = {
  ...commonState,

  items: [],
};

const mutations: MutationTree<State> = {
  ...commonMutations,
};

const actions: ActionTree<State, RootState> = {
  ...(TARGET_BROWSER === 'web' ? webActions : ipcActions),
  ...commonActions,

  init: () => {/** */},
};

const getters: GetterTree<State, RootState> = {
  ...commonGetters,

  languages,
};

export const translation: Module<State, RootState> = {
  namespaced, state, actions, mutations, getters,
};

export default moduleHelper(translation, register);

type C = DefaultConfig;
interface State extends CommonState {
  items: sourceId[];
}
