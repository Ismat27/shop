export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(parseFloat((number / 100).toFixed(2)))

}

export const formatStr = (string, length=20) => {
    if (string.length <= length) {
        return string
    }
    return `${string.substr(0, length)}...`
}