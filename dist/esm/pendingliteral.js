const o=(o,...e)=>Promise.all(e).then((e=>((o,e)=>o.reduce(((o,l,n)=>o+l+(null!=e[n]?e[n]:"")),""))(o,e)));export{o as pendingLiteral};
