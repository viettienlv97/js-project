// Tạo ứng dụng lưu trữ vào local.storage theo key và value 
function createStorage (key){
    // biến store lấy ra giá trị lưu trữ là object theo key - Nếu không có gì thì lấy ra {}
    const store = JSON.parse(localStorage.getItem(key)) ?? {}
    // biến save là hàm lưu store vào localStorage theo key
    const save = ()=> {
        localStorage.setItem(key, JSON.stringify(store))
    }
    // biến storage là object chứa 3 method được return ra
    const storage = {
        // method 1 là hàm get lấy ra value theo key
        get(key){
            return store[key]
        },
        //method 2 là hàm set để thêm vào key và value
        set(key, value){
            //gán value theo key
            store[key] = value
            // lưu vào localStorage
            save()
        },
        // method 3 là hàm xoá key và value
        remove(key){
            // chạy hàm xoá phần tử trong obj theo key
            delete store[key]
            // lưu lại localStorage sau khi xoá
            save()
        }
    }
    // khi gọi ứng dụng sẽ return ra 
    return storage
}

// Profile.js

// ví dụ: tạo 1 hàm mới để lưu Profile Setting có key trong localStorage là 'profile_setting' , key khác nhau sẽ tạo thêm nhiều obj khác nhau
const ProfileSetting = createStorage('profile_setting')

// Chạy các method của hàm
ProfileSetting.set('fullName','Việt Tiến')
ProfileSetting.set('age',26)
ProfileSetting.set('address','Hà Nội')
ProfileSetting.set('class','yes')

ProfileSetting.remove('class')
