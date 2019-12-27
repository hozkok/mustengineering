

import React from 'react'
import universal, { setHasBabelPlugin } from '/home/zeawee/csdev/mustengineering/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/home/zeawee/csdev/mustengineering/src/pages/404.js'), universalOptions)
      t_0.template = '/home/zeawee/csdev/mustengineering/src/pages/404.js'
      
const t_1 = universal(import('/home/zeawee/csdev/mustengineering/src/pages/index.js'), universalOptions)
      t_1.template = '/home/zeawee/csdev/mustengineering/src/pages/index.js'
      
const t_2 = universal(import('/home/zeawee/csdev/mustengineering/src/pages/mission.js'), universalOptions)
      t_2.template = '/home/zeawee/csdev/mustengineering/src/pages/mission.js'
      
const t_3 = universal(import('/home/zeawee/csdev/mustengineering/src/pages/team.js'), universalOptions)
      t_3.template = '/home/zeawee/csdev/mustengineering/src/pages/team.js'
      
const t_4 = universal(import('/home/zeawee/csdev/mustengineering/src/pages/vision.js'), universalOptions)
      t_4.template = '/home/zeawee/csdev/mustengineering/src/pages/vision.js'
      

// Template Map
export default {
  '/home/zeawee/csdev/mustengineering/src/pages/404.js': t_0,
'/home/zeawee/csdev/mustengineering/src/pages/index.js': t_1,
'/home/zeawee/csdev/mustengineering/src/pages/mission.js': t_2,
'/home/zeawee/csdev/mustengineering/src/pages/team.js': t_3,
'/home/zeawee/csdev/mustengineering/src/pages/vision.js': t_4
}
// Not Found Template
export const notFoundTemplate = "/home/zeawee/csdev/mustengineering/src/pages/404.js"

