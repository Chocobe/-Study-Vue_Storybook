<template>
	<div class="bl_faq">
		<h2 class="bl_faq_title">
			{{ title }}
		</h2>
		<!-- /.bl_faq_title -->

		<p class="bl_faq_content">
			{{ content }}
		</p>
		<!-- /.bl_faq_content -->
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Bl_faq extends Vue {
	@Prop({ required: false, default: "제목" })
	title!: string;

	@Prop({ required: false, default: "컨텐츠" })
	content!: string;
}
</script>

<style lang="scss">
.bl_faq {
	padding: 30px;

	text-align: center;

	background-color: rgba(211, 116, 44, 0.2);

	&_title {
		margin-bottom: 40px;

		padding-bottom: 10px;

		border-bottom: 1px solid #e25c00;

		font-size: 1.5rem;
	}

	&_content {
		color: #777;
	}
}
</style>
