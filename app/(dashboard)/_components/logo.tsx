import Image from 'next/image';

export function Logo() {
	return (
		<Image
			src="/logo.svg"
			alt="Udemy Clone Logo"
			width={130}
			height={130}
		 />
	);
}