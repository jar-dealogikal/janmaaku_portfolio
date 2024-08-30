import { Fragment } from "react";

export function generateKey(id) {
	return `${id}_${new Date().getTime()}_${Math.random()}`;
}

const NavTabComponent = (props) => (
	props.nav_items.length !== 0 &&
	props.nav_items.map((item) => (
		<Fragment key={generateKey(item.text + Math.random())}>
			<span
				key={Math.random()}
				className={`px-4 py-2 rounded-lg ${
					item.text === props.active_tab
						? "bg-[#35c1db] text-gray-900"
						: "bg-gray-700 text-[#35c1db]"
				}`}
				onClick={() => props.setActiveNavHandler(item.text)}
			>
				{item.text}
			</span>
		</Fragment>
	))
);

export default NavTabComponent;
