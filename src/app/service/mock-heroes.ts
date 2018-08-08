export const NAVLIST = [
  { name: '系统概况', selected: '', id: 1, url: '#' },
  { name: '视频监控', selected: '', id: 2, url: '#' },
  { name: '环境监测', selected: '', id: 3, url: '#' },
  { name: '结构监测', selected: '', id: 4, url: '/structure/YB' },
  { name: '数据分析', selected: '', id: 5, url: '#' },
  { name: '数据管理', selected: '', id: 6, url: '#' },
  { name: '系统设置', selected: '', id: 7, url: '#' },
  { name: '技术支持', selected: '', id: 8, url: '#' },
]
export const MENUS = {
  jgjc: [
    {
      text: '构件响应',
      type: "button",
      expand: true,
      children: [
        { text: '应变', type: "link", permissionUrl: "/structure/YB" },
        { text: '加速度', type: "link", permissionUrl: "#" },
        { text: '索力', type: "link", permissionUrl: "#" },
      ]
    },
    {
      text: '几何变形',
      type: "button",
      expand: false,
      children: [
        { text: '跪杆倾斜', type: "link", permissionUrl: "#" },
      ]
    }],
  main: [
    { text: '风速风向', type: "link", permissionUrl: "#" },
    { text: '空气温度', type: "link", permissionUrl: "#" },
    { text: '空气湿度', type: "link", permissionUrl: "#" }
  ]
};