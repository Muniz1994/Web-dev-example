from rest_framework import serializers
from .models import DiceMember


class DiceMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiceMember
        fields = ('id', 'name',)