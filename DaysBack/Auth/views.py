# Create your views here.
from rest_framework.authtoken.models import Token
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication

from Auth.models import User
from Auth.serializers import UserSerializer


# Create your views here.
class RegisterView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        # Получаем данные из запроса, не включая курсы
        data = request.data
        print(data)
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({'userId': user.id})


class SetCoursesView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        user_id = request.data.get('userId')
        course_ids = request.data.get('courses', [])

        user = get_object_or_404(User, id=user_id)
        user.courses.set(course_ids)

        return Response({'message': 'Courses set successfully'})


class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        token = request.META['HTTP_AUTHORIZATION'].split()
        user = Token.objects.get(key=token[1]).user
        user_serializer = UserSerializer(user)
        return Response(user_serializer.data)
