const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  dateStyle: 'long',
  timeZone: 'UTC',
})

export function formatDate(date: string) {
  return dateFormatter.format(new Date(date))
}
