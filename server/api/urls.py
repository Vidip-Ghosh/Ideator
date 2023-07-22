from django.urls import path 
from .views import endpoints, LoginUser, RegisterUser, UserProfile, SkillsView, ThemesView, IdeasView

urlpatterns = [
  path("", endpoints, name="endpoints"),
  path("login/", LoginUser.as_view(), name="login-user"),
  path("register/", RegisterUser.as_view(), name="register-user"),
  path("profile/", UserProfile.as_view(), name="user-profile"),
  path("skills/", SkillsView.as_view(), name="skills"),
  path("themes/", ThemesView.as_view(), name="themes"),
  path("ideas/", IdeasView.as_view(), name="ideas"),
]
