import Timeline from '../Timeline';

export default {
  title: 'Timeline',
};

export const Example = () => (
  <Timeline title={'HOLAAAA'} children={<h1>hjhjhjhjhj</h1>} />
);

export const Example1 = () => (
  <>
    <Timeline title={'1'} children={<h1>1</h1>} />
    <Timeline title={'2'} children={<h1>2</h1>} />
    <Timeline title={'2'} children={<h1>3</h1>} />
    <Timeline title={'3'} children={<h1>4</h1>} />
  </>
);
