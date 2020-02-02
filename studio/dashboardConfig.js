export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3757dcd149442db61f0dff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s9grhnzf',
                  apiId: 'e996388b-68da-42f8-b9aa-90fdbb8c27df'
                },
                {
                  buildHookId: '5e3757dcc43c80435dae72f5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-prcn9bgo',
                  apiId: 'db182935-32c7-4945-a0d3-616a938a780d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CloudMunk/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-prcn9bgo.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
