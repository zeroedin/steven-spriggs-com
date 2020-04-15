export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e9781e4e9bce64560a73a8f',
                  title: 'Sanity Studio',
                  name: 'steven-spriggs-com-studio',
                  apiId: '59a69453-8066-4f64-b6de-0cc3531e69b5'
                },
                {
                  buildHookId: '5e9781e469ae0ed6cef58e04',
                  title: 'Blog Website',
                  name: 'steven-spriggs-com',
                  apiId: '103a4209-7b88-4c59-b5de-d00d41f9a05e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zeroedin/steven-spriggs-com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://steven-spriggs-com.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
