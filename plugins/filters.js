import Vue from 'vue'

Vue.filter('currency', function(value) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2
  })
  return formatter.format(value)
})
