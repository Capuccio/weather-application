export const getActualDate = () => {
	const d: Date = new Date();
	let year: string = d.getFullYear().toString();
	let month: string = (d.getMonth() + 1).toString();
	let day: string = d.getDate().toString();

	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;

	return `${year}-${month}-${day}`;
}
