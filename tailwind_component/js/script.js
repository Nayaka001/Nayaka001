$(function ()
{
    const nik = /^\d{16}$/;
    const kata =  /(\b\w+\b)(?=.*\b\1\b)/gi;
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]\\:;'<>,.?/])(?=.*[a-zA-Z]).{8,}$/;
    const name = /^[a-zA-Z\s'-]{2,}$/;

    $('input').each(function ()
    {
        $(this).on('input', function ()
        {
            const pElement = $(this).siblings().filter('p');

            if ($(this).attr('id') == "duplicate-regex")
            {
                const isMatch = $(this).val().match(kata);

                if (isMatch)
                {
                    $(this).removeClass('focus:ring-gray-300 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Ada kata yang duplikat loo, coba dicek lgi')
                    pElement.removeClass('text-gray-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Gadak kata duplikat, aman')
                    pElement.removeClass('text-indigo-300')
                    pElement.addClass('text-emerald-300')
                }
            }
            else if ($(this).attr('id') == "nik-regex")
            {
                if (nik.test($(this).val()))
                {
                    pElement.html('NIK Tepat')
                    pElement.removeClass('text-gray-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    pElement.html('NIK Tidak Tepat')
                    pElement.removeClass('text-gray-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "email-regex")
            {
                if (email.test($(this).val()))
                {
                    pElement.html('Emaiil Valid !!')
                    pElement.removeClass('text-gray-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    pElement.html('Email Tidak Valid.')
                    pElement.removeClass('text-gray-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "password-regex")
            {
                if (password.test($(this).val()))
                {
                    $(this).removeClass('focus:ring-gray-300 focus:ring-rose-400')
                    $(this).addClass("focus:ring-emerald-400")

                    pElement.html('Password kuat dan bisa digunakan')
                    pElement.removeClass('text-indigo-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    $(this).removeClass('focus:ring-indigo-500 focus:ring-emerald-400')
                    $(this).addClass("focus:ring-rose-400")

                    pElement.html('Password tidak kuat, silahkan menggunakan huruf besar, huruf kecil dan simbol')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
            else if ($(this).attr('id') == "nama-regex")
            {
                if (name.test($(this).val()))
                {
                    pElement.html('Nama anda sesuai')
                    pElement.removeClass('text-indigo-300')
                    pElement.addClass('text-emerald-300')
                }
                else
                {
                    pElement.html('Nama anda tidak masuk akal')
                    pElement.removeClass('text-indigo-300 text-emerald-300')
                    pElement.addClass('text-rose-300')
                }
            }
        })
    })
})
