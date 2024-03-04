export const WrapperTitle = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  return (
    <div className="w-[90%] flex bg-cover bg-no-repeat relative mx-auto">
      {children}
    </div>
  );
}