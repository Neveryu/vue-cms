import Mock from 'mockjs'

const piaofang =
  '{"real":{"errorNo":0,"errorMsg":"Success","data":{"total":{"boxNum":244.27,"message":"北京时间17:19:20","thisTip":"2016年","scheNum":"9.50","ticketNum":5.97,"avgPrice":40.9},"detail":[{"movieId":95583,"movieName":"唐人街探案3","attribute":{"1":{"attrName":"上映天数","attrValue":5},"2":{"attrName":"累计票房","attrValue":"2.89亿"},"3":{"attrName":"实时票房","attrValue":"39.3万"},"4":{"attrName":"票房占比","attrValue":43.38},"5":{"attrName":"排片占比","attrValue":17.75},"6":{"attrName":"上座率","attrValue":22.14},"7":{"attrName":"排座占比","attrValue":23.78},"8":{"attrName":"场次","attrValue":"1.69万"},"9":{"attrName":"人次","attrValue":8656},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":23},"12":{"attrName":"平均票价","attrValue":45}}},{"movieId":96141,"movieName":"叶问4：完结篇","attribute":{"1":{"attrName":"上映天数","attrValue":41},"2":{"attrName":"累计票房","attrValue":"10.98亿"},"3":{"attrName":"实时票房","attrValue":"12万"},"4":{"attrName":"票房占比","attrValue":13.29},"5":{"attrName":"排片占比","attrValue":10.87},"6":{"attrName":"上座率","attrValue":19.61},"7":{"attrName":"排座占比","attrValue":11.01},"8":{"attrName":"场次","attrValue":"1.03万"},"9":{"attrName":"人次","attrValue":3549},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":11},"12":{"attrName":"平均票价","attrValue":33}}},{"movieId":95348,"movieName":"姜子牙","attribute":{"1":{"attrName":"上映天数","attrValue":1},"2":{"attrName":"累计票房","attrValue":"5623.7万"},"3":{"attrName":"实时票房","attrValue":"7.3万"},"4":{"attrName":"票房占比","attrValue":8.04},"5":{"attrName":"排片占比","attrValue":8.71},"6":{"attrName":"上座率","attrValue":9.15},"7":{"attrName":"排座占比","attrValue":9.65},"8":{"attrName":"场次","attrValue":8279},"9":{"attrName":"人次","attrValue":1452},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":8},"12":{"attrName":"平均票价","attrValue":50}}},{"movieId":96383,"movieName":"误杀","attribute":{"1":{"attrName":"上映天数","attrValue":48},"2":{"attrName":"累计票房","attrValue":"11.49亿"},"3":{"attrName":"实时票房","attrValue":"6.8万"},"4":{"attrName":"票房占比","attrValue":7.5},"5":{"attrName":"排片占比","attrValue":10.07},"6":{"attrName":"上座率","attrValue":12.6},"7":{"attrName":"排座占比","attrValue":9.08},"8":{"attrName":"场次","attrValue":9570},"9":{"attrName":"人次","attrValue":1881},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":7},"12":{"attrName":"平均票价","attrValue":36}}},{"movieId":96077,"movieName":"囧妈","attribute":{"1":{"attrName":"上映天数","attrValue":1},"2":{"attrName":"累计票房","attrValue":"5558.5万"},"3":{"attrName":"实时票房","attrValue":"5.1万"},"4":{"attrName":"票房占比","attrValue":5.66},"5":{"attrName":"排片占比","attrValue":7.11},"6":{"attrName":"上座率","attrValue":9.33},"7":{"attrName":"排座占比","attrValue":6.66},"8":{"attrName":"场次","attrValue":6760},"9":{"attrName":"人次","attrValue":1021},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":7},"12":{"attrName":"平均票价","attrValue":50}}},{"movieId":95949,"movieName":"紧急救援","attribute":{"1":{"attrName":"上映天数","attrValue":1},"2":{"attrName":"累计票房","attrValue":"396.1万"},"3":{"attrName":"实时票房","attrValue":"5万"},"4":{"attrName":"票房占比","attrValue":5.53},"5":{"attrName":"排片占比","attrValue":3.6},"6":{"attrName":"上座率","attrValue":19},"7":{"attrName":"排座占比","attrValue":2.92},"8":{"attrName":"场次","attrValue":3418},"9":{"attrName":"人次","attrValue":913},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":14},"12":{"attrName":"平均票价","attrValue":54}}},{"movieId":96187,"movieName":"夺冠","attribute":{"1":{"attrName":"上映天数","attrValue":6},"2":{"attrName":"累计票房","attrValue":"234.6万"},"3":{"attrName":"实时票房","attrValue":"4.2万"},"4":{"attrName":"票房占比","attrValue":4.66},"5":{"attrName":"排片占比","attrValue":5.12},"6":{"attrName":"上座率","attrValue":11.15},"7":{"attrName":"排座占比","attrValue":4.4},"8":{"attrName":"场次","attrValue":4861},"9":{"attrName":"人次","attrValue":806},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":8},"12":{"attrName":"平均票价","attrValue":52}}},{"movieId":96199,"movieName":"宠爱","attribute":{"1":{"attrName":"上映天数","attrValue":30},"2":{"attrName":"累计票房","attrValue":"6.80亿"},"3":{"attrName":"实时票房","attrValue":"3.8万"},"4":{"attrName":"票房占比","attrValue":4.2},"5":{"attrName":"排片占比","attrValue":7.59},"6":{"attrName":"上座率","attrValue":5.4},"7":{"attrName":"排座占比","attrValue":7.26},"8":{"attrName":"场次","attrValue":7215},"9":{"attrName":"人次","attrValue":645},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":5},"12":{"attrName":"平均票价","attrValue":58}}},{"movieId":95937,"movieName":"变身特工","attribute":{"1":{"attrName":"上映天数","attrValue":27},"2":{"attrName":"累计票房","attrValue":"1.03亿"},"3":{"attrName":"实时票房","attrValue":"2.7万"},"4":{"attrName":"票房占比","attrValue":2.99},"5":{"attrName":"排片占比","attrValue":2.24},"6":{"attrName":"上座率","attrValue":24.29},"7":{"attrName":"排座占比","attrValue":1.88},"8":{"attrName":"场次","attrValue":2127},"9":{"attrName":"人次","attrValue":752},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":12},"12":{"attrName":"平均票价","attrValue":36}}},{"movieId":96539,"movieName":"熊出没·狂野大陆","attribute":{"1":{"attrName":"上映天数","attrValue":1},"2":{"attrName":"累计票房","attrValue":"3764.7万"},"3":{"attrName":"实时票房","attrValue":"2.3万"},"4":{"attrName":"票房占比","attrValue":2.51},"5":{"attrName":"排片占比","attrValue":3.04},"6":{"attrName":"上座率","attrValue":8.98},"7":{"attrName":"排座占比","attrValue":2.92},"8":{"attrName":"场次","attrValue":2886},"9":{"attrName":"人次","attrValue":430},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":7},"12":{"attrName":"平均票价","attrValue":52}}},{"movieId":95657,"movieName":"动物特工局","attribute":{"1":{"attrName":"上映天数","attrValue":19},"2":{"attrName":"累计票房","attrValue":"4326.5万"},"3":{"attrName":"实时票房","attrValue":"0.7万"},"4":{"attrName":"票房占比","attrValue":0.81},"5":{"attrName":"排片占比","attrValue":3.92},"6":{"attrName":"上座率","attrValue":4.55},"7":{"attrName":"排座占比","attrValue":2.88},"8":{"attrName":"场次","attrValue":3722},"9":{"attrName":"人次","attrValue":215},"10":{"attrName":"场均人次","attrValue":1},"11":{"attrName":"场均收入","attrValue":1},"12":{"attrName":"平均票价","attrValue":33}}},{"movieId":96667,"movieName":"姜子牙","attribute":{"1":{"attrName":"上映天数","attrValue":1},"2":{"attrName":"累计票房","attrValue":"159.6万"},"3":{"attrName":"实时票房","attrValue":"0.7万"},"4":{"attrName":"票房占比","attrValue":0.75},"5":{"attrName":"排片占比","attrValue":0.08},"6":{"attrName":"上座率","attrValue":100},"7":{"attrName":"排座占比","attrValue":0.02},"8":{"attrName":"场次","attrValue":76},"9":{"attrName":"人次","attrValue":161},"10":{"attrName":"场均人次","attrValue":3},"11":{"attrName":"场均收入","attrValue":89},"12":{"attrName":"平均票价","attrValue":42}}}]}},"pre":[["20200130","20200130"],["20200131","20200131"],["20200201","20200201"],["20200202","20200202"],["20200209","20200209"]]}'

const count = 30
const mergeTableData = []
for (let i = 0; i < count; i++) {
  mergeTableData.push(
    Mock.mock({
      name: '@cname()',
      total: '@natural(500, 1000)',
      passcount: '@natural(1, 499)',
      compRatio: '',
      notdo: '@natural(1, 100)',
      doing: '@natural(50, 200)',
      voertime: '@natural(1, 100)',
      getover: '@natural(100, 200)',
      implementRatio: '',
    }),
  )
}

mergeTableData.forEach((data) => {
  data.compRatio = `${data.passcount}/${data.total}`
  data.implementRatio = `${data.getover}/${data.total}`
})

const fileTypesArr = ['', 'pdf', 'code']
let fileCount = 15
const fileList = []
for (let i = 0; i < fileCount; i++) {
  fileList.push(
    Mock.mock({
      id: i + 1,
      materialType: '@natural(0, 4)',
      'fileType|1': fileTypesArr,
      name: '@ctitle(4, 8)',
      theme: '@natural(0, 4)',
      nameEdit: false,
      thumbnailUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACCCAMAAACww5CIAAACf1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8YkP8AAAACCxMamv/6+voaGhoXi/YYjv8aoP8cq/8dr/8bo/8cqP8bpv8Ykv8drv8BAwUcrP8Zlf8Xjf/s7OzLy8scp/8anP8ZmP/d3d0BBArg4ODT09O7u7sEGCsKCgoanf8YlP/8/Pz09PTIyMgMTIV1dXUGKEVEREQ0NDQODg4GBgYdsv8dsf8Zl//m5uYVgOXj4+MWgtfW1tYTc87BwcERbLWzs7Ovr6+np6cQX6OgoKCTk5MMSXlwcHBra2tiYmIVFRUetf/39/fp6ekWhOkXi+QVfNvY2NjPz88TdcUSb7u6urq3t7cPYK0NUJGQkJCLi4ttbW0JO2cINFtVVVVRUVEHMFEHLEs6OjoEHDEiIiIcHBwXj/vx8fEWh+4Sb8gRbL+rq6upqakOVZiWlpaJiYmGhoYMSIF9fX15eXkKPnQLRHJMTExHR0c9PT0FHzkqKiomJiYEFyUBBw8bovfu7u4Wht4UedsUeMrFxcW9vb0RZrOkpKSampoPXZqAgIALQmtlZWUJOGJZWVkIMFcFIUExMTEwMDAtLS0DEh8Zl/v4+PgXj/QWhvEWhvAYku8YjuwUfNcUfNAVfc0RaLkSaKsRZ6kPWqENUYlbW1sCEBhkSPCkAAAAOHRSTlMA87y4BeKrltbFnUDo0MCup6D67t7ayZKGemtmWS8rEwLNso1wVEpFGaR+UDUlHwmBYls5i1oN/DMym4YAAAfTSURBVHjaxNndS1NxHMfxX5s6t1Kz1KzsuazMnqjgyxv03ovtQrYxUBEfLkREVBQf0AsFBRUUQvEiSVFQ0YsuiiIiqKC/oH+o31lzjtPZg55zttfVNnbx5ffw+X53pmx5UFl2+XLZ4zpVOPWlJFTntYyiBwF/VbX39Sv9upYU9/QHjbXe6qqayrrnylXXi0kov3GVuFiMuNqbHhIu3FcuuohZZ+jDh7mdXkwqlGtKMGmOSFzrGiYe5ZL4+vdsd/SHFyYxtIQlIdiD4ftCa39osTlxRtzwHO1tUOLm0XYk6T3asMRtdKHdUs6qv+L1l/vKgak2SYjqN+1yYg2G5NgR4Pd5/F7fk9sO3YhSkoYkaW40KCk2Rj9KUoikqmtOn8YpydE6J7xFyq5yUhxIjvZJcUfZ5EOb6oxGQmPdtEQlR4Mxupc6IoOdzWiVypabaF1BiesIS876OiSufRXtvO0DcSi2dAN+ZcclYFZsCaOps3nYUOKprDTiSWzqAioCnpIX9ep03pxkw7jYtMWx0pdn7Jb2i1jixN3cM6OGFCti0zgpyopOsw6xiZHoyHIPLIhNHdD7bWR+c7znFD3+PNp+vxhmRkNi28BoWAzBPbQHKhdlQLe4ogsoVTl4ijYjrmiKATdUdvfjh9Ely8DVHFvWe3HJMBBQ2QWAd+KSeeBxjtuxKC7ZzG07Ht0DusQlfwDfs2wZ4b2EYVBcESHO81BlcIWESXHFV7Qss5aXY1FxRSj7L7QAhv3tsaVBMVn8Ou1MFUtjW3sYKjL0jO6QWJiA7iZxysBbtDplpRT4KZbQWkUbHRMnGFUUKwuNaH1iaRJ+Tf8bDbqcWJH2HuCV+l9DpkuxtdsuGlpYHNAJ1FqNMjnE9QocOXJCPwJ309zPT9la8e5yUJwwC/jTBNWQ5EkIqEyzHROSJzvWSeFDW5M8OUArsdgMq2EmanOyGB4WSyMYAhZp2TwkJouw2mZvmusUSwtraA//m7DXZ8SsBxiQM5tGSxNuv3+ZU/NmIpfN9qDXxp1sO4LDNrE202J6cHE1TVq2f1uNiA39K9/7JJ0JwGe6nvOSZ4OA1/R0bFbyrBWoMUX2nOTZAOA3pcSXjFW7UOJnU17VAYeZv98pTvsB1KsTRVXAtqQVA/rFWSNo11SKiuRYZeknEBRn7WJ4rZKuX8pcROvBj6g4rLUZQ8NJYBo2Jb/ax2KkhKYf6I1I3oWngKqUhfgkBTCL1pics1elICaS/5Y9jk+XBdEBeJKhHZGCCLZAWTIkBqQgNlr+NbGi2wHgS1tTAbQNAxW3i1R58WWgd725ANZ7gXPFNaqagrvwt1t7aW0qiOIAPlErPqJCq6JWrW8r1ar1xf0n4NxnnpCELEKyCNmkJZSQRSCbQltooS4sVApiC10U2kWhFRUEEdGF4vuNH8g7c9NQ2pjepPcB/r5ADjlnzp2ZM+QMXHeYb+1WfO5hi5QfveYe33XJ4+d8a3MNQHbI75KhMt9z9wF4FRNcIi3wO94bAHJiQHCHNgmgh3QD8D1MCK6I+KeNCUgbgFFRcEX8Qwhov014o/juUlEoxeqrgpsA7oWp4AZprnpv1ANgShFcoU4a+36jMgOuVGYmnuJ1Wb0hKWqCC8QCgI4dqyfRbNCFoqDBX7Xz6C0AS660K3UKQCdhuqAbdqFT+B8mAXQTbhtbpM7ng4Yn1oytOwFMu5AP9QGAa4Qz8lFwvFWIH6G7Qjijc8/LDueDyvd4z151EYBvwOF+lRFTAK6TGi+ACWdLk0ozANqvkpojAFJKRnCSlFt3m8pLc9bJTylVn64ty9rJfEl1cpVKbH3uJ2v1QleUqOCI2h9xeeP0aVqLCA4JSLk6s7hu6CbkqOAIGpyB7iRZ5xLvFWlHEkITyjK/41/v9h0AC3lngpCz0PXWf0yDUcmBhFDt0T/flx8CkNL8VLAZjUhvAHSQek5AtyALdqP5e9BdbPCkZsbuFRKVvlRHs/W1AfC902yNgoriWwCeqw1fSL+J2VkWNBF8vckr6mPQ3ZcjtkVBA/3z4Ju6Bs5ANzck2BQFpUMTxlVZQ4ege95vUxRUHoPOe5s01OWBbryf2hEFDX4Fc4Vs4gaYZ3ZEQeXBJPgMcFPnwYzJVmeE6jGsGCNAE/rAlPIBamkMQv9YCLpzxJRjYMr5BLXyg5EvgTlKTOoEkw2LUct6dTz4ojqCNO04mMm4ZE150mhMuQ+jHppwAUxqUM5QK9qkPLIE5jhpygkvmHJYiW45FaL8IwmdZy9pUtc2MK9HtvgloZngJyMVp3tJ846ASb7Q1NYrg1JN+ukDs4e05LwHTO5bUKG0tRBEeXAKzJ3rpEXdB8C9fBIWKW0hhOBIBdy2K6R11zvALY6EFYE21yHF4OdKEkz7ObIlXXvAhV4OquoApaYbpCo9qayA29lLturibhimSgOSFjG1ILRwYnwShn09xArnT8PwdnHML6n+hl+2gD8Wjj+rLMOwq49Y5dZpVKUWS++VcCwdCdT5/Uhck5SH45VpVO3qJFbq2Y5Vvly2VBgQY5KqKWI6HY+n06KiqVJMSQyP/37wB6v29xGrnThyEDWh5dyr+fJscbQw/OjRcGG0OFvO3n+QSqKm7exlYgsvNgolkyFs1HGV2OQgTGsjNjnVBtO8Owj3nwbhgWnttgWxy2PaoWaC+AuAXqWYKHupMgAAAABJRU5ErkJggg==',
      size: '@natural(10, 400)k',
      createdTime: '@datetime()',
      createdUserName: '@cname()',
      createdOrgName: '@cword("文化宣传教育体育", 2, 4)部',
      updateTime: '@datetime()',
      updateUserName: '@cname()',
      downloadCount: '@natural(10, 100)',
    }),
  )
}

export function getFileList() {
  return fileList
}

export function delFiles(ids) {
  let length = ids.length || 0
  fileCount -= length
  return true
}

export { piaofang, mergeTableData }
