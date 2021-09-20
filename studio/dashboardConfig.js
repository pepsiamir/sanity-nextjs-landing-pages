export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6148d12f71087c00b4d52f94',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2ajdnw57',
                  apiId: '30491d2d-677e-452e-91df-455c7201ab08'
                },
                {
                  buildHookId: '6148d12fe0c6a4008cbfdbc1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-o92wt3hx',
                  apiId: '1f2b70f6-e82e-416b-9e11-b79c7b573b77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pepsiamir/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-o92wt3hx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
