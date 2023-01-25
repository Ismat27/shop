export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number / 100)

}

export const formatStr = (string, length=20) => {
    if (string.length <= length) {
        return string
    }
    return `${string.substr(0, length)}...`
}