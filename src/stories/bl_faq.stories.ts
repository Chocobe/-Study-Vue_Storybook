import { Meta, Story } from "@storybook/vue";

import Bl_faq from "@/components/bl_faq.vue";

export default {
	title: "Element/FAQ",
} as Meta;

export const bl_faq: Story = () => ({
	components: { Bl_faq },
	template: `<Bl_faq title="제목~~~" content="내용~~~~"></Bl_faq>`,
});
