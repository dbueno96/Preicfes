export const isMobile = () => (
	(window.innerWidth <= 600) && (window.innerHeight <= 860)
)

export const capitalize = str => (
	typeof(str) === 'string' ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : str
)