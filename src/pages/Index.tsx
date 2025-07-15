import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Бракоразводный процесс",
      description: "Профессиональное сопровождение развода с минимизацией стресса и максимальной защитой ваших интересов",
      icon: "Users"
    },
    {
      title: "Раздел имущества",
      description: "Справедливый раздел ипотеки, кредитов, вкладов и другого имущества супругов",
      icon: "Home"
    },
    {
      title: "Алименты",
      description: "Взыскание, изменение размера алиментов и защита прав детей",
      icon: "Heart"
    },
    {
      title: "Лишение родительских прав",
      description: "Защита интересов ребенка в сложных семейных ситуациях",
      icon: "Shield"
    },
    {
      title: "Исковые заявления",
      description: "Профессиональное составление документов для суда",
      icon: "FileText"
    },
    {
      title: "Представительство в суде",
      description: "Опытное представление ваших интересов в судебных заседаниях",
      icon: "Scale"
    },
    {
      title: "Брачные договоры",
      description: "Составление и консультации по брачным договорам",
      icon: "FileCheck"
    },
    {
      title: "Консультации",
      description: "Онлайн и офлайн консультации по семейному праву в Москве",
      icon: "MessageSquare"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Icon name="Scale" size={32} className="text-slate-800" />
              <div>
                <h1 className="text-2xl font-playfair font-bold text-slate-800">Рылькова Анна Александровна</h1>
                <p className="text-sm text-slate-600">Юрист по семейному праву</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-700 hover:text-slate-900 transition-colors">Услуги</a>
              <a href="#about" className="text-slate-700 hover:text-slate-900 transition-colors">О юристе</a>

              <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Записаться на прием
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-slate-900 mb-6 leading-tight">
              Профессиональная помощь
              <span className="block text-blue-600">в семейных вопросах</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Более 15 лет успешной практики в области семейного права. 
              Защищаю интересы семей с деликатностью и профессионализмом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Полный спектр юридических услуг по семейному праву
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg mr-4">
                      <Icon name={service.icon} size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-6">О юристе</h2>
              <div className="space-y-6 text-slate-600">
                <p className="text-lg">
                  Рылькова Анна Александровна — опытный юрист с более чем 15-летним стажем в области семейного права. 
                  Специализируется на сложных семейных спорах и защите интересов детей.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Icon name="Award" size={20} className="text-blue-600 mr-3" />
                    <span>Более 500 выигранных дел</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Star" size={20} className="text-blue-600 mr-3" />
                    <span>15+ лет опыта</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" size={20} className="text-blue-600 mr-3" />
                    <span>Защита интересов семей</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-blue-600 mr-3" />
                    <span>Профессиональный подход</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">МГУ им. Ломоносова</Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">Адвокат</Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">Член АП Москвы</Badge>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 text-center">
                <Icon name="Scale" size={120} className="text-blue-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Профессиональный подход</h3>
                <p className="text-slate-600">
                  Каждое дело — это история семьи, которая требует деликатного и профессионального подхода
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-slate-900 mb-6">Связаться со мной</h2>
              <p className="text-xl text-slate-600 mb-8">
                Получите профессиональную консультацию по вашему вопросу
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <Icon name="Phone" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Телефон</p>
                    <p className="text-slate-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <Icon name="MessageCircle" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">WhatsApp</p>
                    <p className="text-slate-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <Icon name="Send" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Telegram</p>
                    <p className="text-slate-600">@lawyer_anna</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <Icon name="MapPin" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Офис в Москве</p>
                    <p className="text-slate-600">ул. Тверская, 15, офис 301</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </div>
            </div>
            
            <Card className="border-gray-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-6">Записаться на прием</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Ваше имя
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Телефон
                    </label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Тип консультации
                    </label>
                    <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none">
                      <option>Онлайн консультация</option>
                      <option>Очная встреча в офисе</option>
                      <option>Выезд к клиенту (Москва)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Опишите вашу ситуацию
                    </label>
                    <textarea 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none h-24"
                      placeholder="Кратко опишите вашу ситуацию..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на консультацию
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Scale" size={28} className="text-blue-400" />
                <div>
                  <h3 className="text-xl font-playfair font-bold">Рылькова Анна Александровна</h3>
                  <p className="text-slate-400 text-sm">Юрист по семейному праву</p>
                </div>
              </div>
              <p className="text-slate-400">
                Профессиональная юридическая помощь в решении семейных вопросов с 2008 года.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Развод и раздел имущества</li>
                <li>Алименты</li>
                <li>Брачные договоры</li>
                <li>Представительство в суде</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@lawyer-rylkova.ru</p>
                <p>ул. Тверская, 15, офис 301</p>
                <p>Москва</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-400">
            <p>&copy; 2024 Анна Петрова. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;