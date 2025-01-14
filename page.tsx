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
          HÁI LỘC NGÀY TẾT - MỪNG ĐẢNG MỪNG XUÂN
          </h1>
          <div className="text-yellow-500 text-lg md:text-xl mb-8">
            ✧ Chào mừng kỷ niệm 95 năm ngày thành lập Đảng Cộng sản Việt Nam (03/02/1930 - 03/02/2025) và chào mừng Đại hội Đảng các cấp, tiến tới Đại hội Đảng bộ tỉnh lần thứ XVI, nhiệm kỳ 2025 – 2030; Đại hội toàn quốc lần thứ XIV của Đảng ✧
          </div>
          
          {/* Add Rules Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="mb-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-red-900 font-bold text-lg px-8"
            >
              Thể Lệ
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-red-900 border-2 border-yellow-500 max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-yellow-500 text-3xl font-bold mb-6 text-center">
                Thể Lệ Vòng Quay May Mắn
              </DialogTitle>
            </DialogHeader>
            <div className="text-yellow-100 text-left space-y-4 font-medium text-lg">
              <div className="mb-8">
                <h3 className="text-yellow-500 font-bold text-xl mb-3">Thời gian</h3>
                <p>Chương trình bắt đầu từ ngày 10/02/2024 đến hết ngày 20/02/2024</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-yellow-500 font-bold text-xl mb-3">Thể lệ</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Mỗi người chơi được tặng một lượt quay may mắn mỗi ngày.</li>
                  <li>Khi Vòng quay may mắn bắt đầu khởi động, người chơi có cơ hội nhận được những phần quà tương ứng trên vòng quay.</li>
                  <li>Phần thưởng sẽ được trao ngay sau khi vòng quay dừng lại.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-yellow-500 font-bold text-xl mb-3">Lưu ý</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Mỗi ngày chương trình chỉ tặng một số lượng phần quà nhất định.</li>
                  <li>Trong trường hợp số phần quà đã hết, vòng quay sẽ được khởi động lại vào ngày hôm sau.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-yellow-500 font-bold text-xl mb-3">Quy định</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Người chơi không được sử dụng phần mềm để gây rối hoặc điều chỉnh kết quả của Vòng quay may mắn.</li>
                  <li>Trong một ngày, mỗi người chơi chỉ có tối đa 1 lượt quay.</li>
                  <li>Ban tổ chức có quyền quyết định cuối cùng trong mọi trường hợp tranh chấp.</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="mb-4 ml-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-red-900 font-bold text-lg px-8"
            >
              Giải Thưởng
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-red-900 border-2 border-yellow-500">
            <DialogHeader>
              <DialogTitle className="text-yellow-500 text-3xl font-bold mb-6 text-center">
                Giải Thưởng
              </DialogTitle>
            </DialogHeader>
            <div className="text-yellow-100 text-left space-y-4 font-medium text-lg">
              <p className="mb-8">
                💥💥💥 Giải thưởng được trao tại chương trình là 25 chiếc lì xì "Chúc mừng năm mới", 
                dành cho 25 người trả lời đáp án đúng nhiều nhất và nhanh nhất, cụ thể:
              </p>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <span className="text-3xl mr-4">🥇</span>
                  <span>01 giải nhất: lì xì 1.000.000đ/chiếc</span>
                </li>
                <li className="flex items-center">
                  <span className="text-3xl mr-4">🥈</span>
                  <span>02 giải nhì: lì xì 500.000đ/chiếc</span>
                </li>
                <li className="flex items-center">
                  <span className="text-3xl mr-4">🥉</span>
                  <span>03 giải ba: lì xì 300.000đ/chiếc</span>
                </li>
                <li className="flex items-center">
                  <span className="text-3xl mr-4">🏅</span>
                  <span>19 giải khuyến khích: lì xì 100.000đ/chiếc</span>
                </li>
              </ul>
            </div>
          </DialogContent>
        </Dialog>
          
        </div>

        {/* Red Envelopes Component */}
        <RedEnvelopes />

        {/* Image Gallery */}
        <ImageGallery />
      </main>
    </div>
  )
}