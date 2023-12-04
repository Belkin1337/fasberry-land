export const Wrapper = ( { children }: { children: React.ReactNode }) => {
  return ( 
    <div className="w-[90%] mx-auto relative">
      {children}
    </div>
   );
}