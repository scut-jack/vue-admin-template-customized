import defaultSettings from '@/settings'

const { title, fixedHeader, sidebarLogo, sideTheme, showSettings, topNav, tagsView, dynamicTitle } = defaultSettings

const storageSetting = JSON.parse(localStorage.getItem('layout-setting')) || ''

const state = {
  title: title,
  theme: storageSetting.theme || '#409EFF',
  sideTheme: storageSetting.sideTheme || sideTheme,
  showSettings: showSettings,
  topNav: storageSetting.topNav === undefined ? topNav : storageSetting.topNav,
  tagsView: storageSetting.tagsView === undefined ? tagsView : storageSetting.tagsView,
  fixedHeader: storageSetting.fixedHeader === undefined ? fixedHeader : storageSetting.fixedHeader,
  sidebarLogo: storageSetting.sidebarLogo === undefined ? sidebarLogo : storageSetting.sidebarLogo,
  dynamicTitle: storageSetting.dynamicTitle === undefined ? dynamicTitle : storageSetting.dynamicTitle
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  // 修改布局设置
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  // 设置网页标题
  setTitle({ commit }, pageTitle) {
    let customizedTitle = title;
    if (pageTitle) {
      customizedTitle = `${pageTitle} - ${title}`
    }
    commit('CHANGE_SETTING', { key: 'title', value: customizedTitle })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

