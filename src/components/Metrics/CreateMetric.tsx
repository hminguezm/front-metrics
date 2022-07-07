import Layout from '../common/Layout';
import BaseText from '../common/BaseText';
import Button from '../common/Button';
import Divider from '../common/Divider';

const CreateMetric = () => {
  return (
    <Layout>
      <>
        <Divider />
        <BaseText testId="create" center marginTop={16} text="TEEEEEE" />
        <div data-testid="action" className="">
          <Button label="TEEEEEEEE" onClick={() => console.log('hec')} />
        </div>
        <div data-testid="separator" className="" />
        <div data-testid="containerInfo" className=""></div>
      </>
    </Layout>
  );
};

export default CreateMetric;
