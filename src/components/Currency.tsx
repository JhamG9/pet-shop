interface PropsCurrency {
  value: number;
}

export const Currency = ({ value }: PropsCurrency) => {
  return (
    <>
      {Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      }).format(value)}
    </>
  )
}
