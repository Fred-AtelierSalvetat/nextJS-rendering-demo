import Card from "./Card";

//๐ This default export determines where your story goes in the story list
export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Card {...args} />;

export const CardWithoutDuration = Template.bind({});
CardWithoutDuration.args = {
  title: "Rendering option",
  description: "Rendering quick description",
  linkDesc: "linkDesc",
  linkHref: "linkUrl",
};

export const CardWithDuration = Template.bind({});
CardWithDuration.args = { ...CardWithoutDuration.args, duration: 5000 };
