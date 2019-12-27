export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
        template: 'src/containers/Home',
      },
      {
        path: '/vision',
        template: 'src/containers/Vision',
      },
      {
        path: '/mission',
        template: 'src/containers/Mission',
      },
      {
        path: '/team',
        template: 'src/containers/Team',
      },
    ]
  },
  plugins: [
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
