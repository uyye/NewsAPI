export default function formatDate(dateString: string): string {
const data = new Date(dateString);
const options: Intl.DateTimeFormatOptions = {month:'long'}
const month = data.toLocaleDateString('id-ID', options);
const day = data.getDate();
const year = data.getFullYear();
const newDate = `${month} ${day}, ${year}`;

return newDate;
}