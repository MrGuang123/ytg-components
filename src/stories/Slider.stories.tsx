import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomSlider from './PlayGround/CustomSlider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Slider',
    component: CustomSlider,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CustomSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomSlider> = (args) => <CustomSlider />;

export const Primary = Template.bind({});
