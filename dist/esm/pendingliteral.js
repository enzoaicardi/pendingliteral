const o=(o,...e)=>Promise.all(e).then((e=>r(o,e))),e=(o,e="")=>Promise.all(o).then((o=>o.join(e))),r=(o,e)=>o.reduce(((o,r,s)=>o+r+(null!=e[s]?e[s]:"")),"");export{o as pendingLiteral,e as pendingMerge};
