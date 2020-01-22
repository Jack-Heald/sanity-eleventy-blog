export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e28608b0e950c165e6aa51d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-cjssmm12',
                  apiId: '5b99de56-449d-4523-9719-58a242d02d95'
                },
                {
                  buildHookId: '5e28608c0e950c2cce6aa529',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-46gijjfb',
                  apiId: 'b333940e-74a4-4be4-a44b-2cacb6ab792c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jack-Heald/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-46gijjfb.netlify.com', category: 'apps'}
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
