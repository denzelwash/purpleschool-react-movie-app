export default function getClassString(className, styleModule) {
	if (!className) {
		return ''
	}
	return className
		.split(' ')
		.map((c) => (styleModule[c] ? styleModule[c] : c))
		.join(' ')
}
