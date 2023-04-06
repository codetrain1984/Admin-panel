const useDashboard = () => {
  const dashboardData = [
    {
      title: 'Total Income',
      price: '579,000',
      className: 'one',
    },
    {
      title: 'Total Expense',
      price: '79,000',
      className: 'two',
    },
    {
      title: 'Cash on Hand',
      price: '92,000',
      className: 'three',
    },
    {
      title: 'Net Profi Margin',
      price: '779,000',
      className: 'four',
    },
  ]

  return { dashboardData }
}

export default useDashboard
