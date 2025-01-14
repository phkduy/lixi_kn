import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RedEnvelopes } from "@/components/RedEnvelopes"
import { ImageGallery } from "@/components/ImageGallery"

export default function LuckyWheelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-800 relative overflow-hidden">
      {/* ... existing corner decorations ... */}
      
      <main className="relative z-10 container mx-auto px-4 py-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 font-serif">
            Lì Xì May Mắn
          </h1>
          <div className="text-yellow-500 text-lg md:text-xl mb-8">
            ✧ H Á I   L Ộ C   Đ Ầ U   X U Â N ✧
          </div>
          
          {/* Add Rules Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="mb-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900"
            >
              Thể Lệ
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-red-900 border-yellow-400 max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-yellow-400 text-2xl mb-4">Thể Lệ Vòng Quay May Mắn</DialogTitle>
            </DialogHeader>
            <div className="text-yellow-300 text-left space-y-4">
              <div className="mb-6">
                <h3 className="text-yellow-400 font-semibold mb-2">Thời gian</h3>
                <p>Chương trình bắt đầu từ ngày 10/02/2024 đến hết ngày 20/02/2024</p>
              </div>

              <div className="mb-6">
              <h3 className="text-yellow-400 font-semibold mb-2">Thể lệ</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mỗi người chơi được tặng một lượt quay may mắn mỗi ngày.</li>
                  <li>Khi Vòng quay may mắn bắt đầu khởi động, người chơi có cơ hội nhận được những phần quà tương ứng trên vòng quay.</li>
                  <li>Phần thưởng sẽ được trao ngay sau khi vòng quay dừng lại.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-yellow-400 font-semibold mb-2">Lưu ý</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mỗi ngày chương trình chỉ tặng một số lượng phần quà nhất định.</li>
                  <li>Trong trường hợp số phần quà đã hết, vòng quay sẽ được khởi động lại vào ngày hôm sau.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-yellow-400 font-semibold mb-2">Quy định</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Người chơi không được sử dụng phần mềm để gây rối hoặc điều chỉnh kết quả của Vòng quay may mắn.</li>
                  <li>Trong một ngày, mỗi người chơi chỉ có tối đa 1 lượt quay.</li>
                  <li>Ban tổ chức có quyền quyết định cuối cùng trong mọi trường hợp tranh chấp.</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

          <p className="text-yellow-300 italic text-lg md:text-xl max-w-3xl mx-auto">
            Năm mới chúc gia đình ta một nụ cười cho lòng thêm ấm áp, một ánh mắt cho hạnh phúc tràn đầy, một lời nói cho tròn vẹn niềm tin, một chút hờn ghen cho yêu thương tỏa sáng, một trái tim hồng cho tình luôn thủy chung.
          </p>
          
        </div>

        {/* Red Envelopes Component */}
        <RedEnvelopes />

        {/* Image Gallery */}
        <ImageGallery />
      </main>
    </div>
  )
}