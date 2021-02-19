let key = "obtained"

export function addAmiibo(oneAmiibo) {
    const oldAmiibos = getObtainedAmiibos()
    oldAmiibos.push(oneAmiibo)
    let finalArray = removeDuplicates(oldAmiibos)
    localStorage.setItem(key, JSON.stringify(finalArray))
}

export function removeAmiibo(oneAmiibo) {
    const oldAmiibos = getObtainedAmiibos()
    let deleteIndex = oldAmiibos.findIndex((e) => {
        if (e.tail === oneAmiibo.tail) {
            return true;
        }
        else {
            return false;
        }
    })
    if (deleteIndex !== -1) {
        oldAmiibos.splice(deleteIndex, 1)
    }
    localStorage.setItem(key, JSON.stringify(oldAmiibos))
}

export function getObtainedAmiibos() {
    if (localStorage.getItem(key)) {
        let amiiboData = localStorage.getItem(key)
        let amiiboArray = JSON.parse(amiiboData)
        return amiiboArray
    }
    else {
        localStorage.setItem(key, JSON.stringify([]))
        return []
    }
}

export function removeDuplicates(amiiboArray) {
    if (amiiboArray.length <= 0) return []
    const uniqueAmiibos = Array.from(new Set(
        amiiboArray.map((singularAmiibo) => {
            return singularAmiibo.tail
        })
    )).map((tail) => {
        return amiiboArray.find((singularAmiibo) => {
            if (tail === singularAmiibo.tail) {
                return true;
            }
            else {
                return false;
            }
        })
    })

    return uniqueAmiibos;
}