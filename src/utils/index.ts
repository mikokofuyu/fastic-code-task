// some simple reusable utility functions to format text where needed

export const capitalise = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

export const formatId = (text: string) => text.replace(/_/g, ' ')

