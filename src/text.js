const arr =
    [
        { language: 'JavaScript' }, { language: 'JavaScript' }, { language: 'TypeScript' }, { language: 'C++' }
    ]

let result = []
arr.forEach((i) => {
    const commonItem = result.filter((r) => i.language == r.language)

    if (!commonItem.length) {
        result.push({ ...i, count: 1 })
    } else {
        result.forEach((item) => {
            if (item.language == i.language) {
                item.count += 1
            }
        })
    }


})
console.log(result)