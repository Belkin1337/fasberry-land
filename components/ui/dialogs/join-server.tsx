import { JoinToServer } from "@/components/section/join-to-server"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export const JoinServer = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="flex items-center justify-center w-full lg:w-[268px] h-[54px] lg:h-[64px] border border-white bg-transparent z-20 relative cursor-pointer
          hover:shadow-[inset_12px_0px_0px_#fff] hover:bg-black/80 hover:transition transition hover:duration-500 duration-500 rounded-none">
          <p className=" text-white font-bold text-xl lg:text-2xl">Играть сейчас</p>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-7xl bg-transparent border-none">
        <JoinToServer />
      </DialogContent>
    </Dialog>
  )
}