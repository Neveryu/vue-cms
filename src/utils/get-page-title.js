const title = process.env.VUE_APP_TITLE || 'Vue CMS' // 网页标题

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
