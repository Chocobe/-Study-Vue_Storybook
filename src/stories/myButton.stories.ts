import { Meta, Story } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import MyButton from "../components/MyButton.vue";

export default {
	title: "Element/버튼",
} as Meta;

export const withText: Story = () => ({
	components: { MyButton },
	template: `
		<my-button @click="action">Hello Button</my-button>
	`,
	methods: {
		action: action("click 이벤트"),
	},
});
withText.storyName = "버튼 컴포넌트";

export const withSomeEmoji: Story = () => ({
	components: { MyButton },
	template: "<my-button>😀 😎 👍 💯</my-button>",
});
