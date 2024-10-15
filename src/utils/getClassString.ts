export default function getClassString(
	className: string,
	styleModule: {
		readonly [key: string]: string
	}
) {
	if (!className) {
		return ''
	}
	return className
		.split(' ')
		.map((c) => (styleModule[c] ? styleModule[c] : c))
		.join(' ')
}
