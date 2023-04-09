const useDashboard = () => {
  const dashboardData = [
    {
      title: 'Total Income',
      price: '579000',
      className: 'one',
    },
    {
      title: 'Total Expense',
      price: '79000',
      className: 'two',
    },
    {
      title: 'Cash on Hand',
      price: '92000',
      className: 'three',
    },
    {
      title: 'Net Profi Margin',
      price: '779000',
      className: 'four',
    },
  ]

  return { dashboardData }
}

export default useDashboard
