export const moneyTrans = (amount: number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const handleScrollTop = () => {
  window.scrollTo({ 'behavior': 'smooth', 'top': 0 })
}