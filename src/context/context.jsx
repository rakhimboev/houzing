import PropertiesProvider from './properties/properties';

const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>{children}</PropertiesProvider>
    </>
  );
};

export default RootContext;
